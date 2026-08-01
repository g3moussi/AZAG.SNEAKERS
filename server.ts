import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Server-side proxy API route to send order details directly to Admin App endpoint
  // Bypasses browser CORS restriction ("Failed to fetch")
  app.post("/api/sync-order", async (req, res) => {
    const orderData = req.body;
    
    // Official webhook endpoint for the published Admin App
    const targetEndpoint = "https://azag-e-commerce-admin-473515165963.europe-west2.run.app/api/webhooks/orders";

    const orderId = orderData?.orderId || orderData?.id || 'NEW_ORDER';
    console.log(`[Server Proxy] Processing single order sync for ${orderId} -> ${targetEndpoint}`);

    try {
      const response = await fetch(targetEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(orderData),
      });

      const responseText = await response.text().catch(() => "");
      console.log(`[Server Proxy] Posted to ${targetEndpoint} -> Status ${response.status}`, responseText);

      return res.json({ success: true, status: response.status, endpoint: targetEndpoint });
    } catch (err: any) {
      console.error(`[Server Proxy] Error posting to ${targetEndpoint}:`, err?.message || err);
      return res.status(500).json({ success: false, error: err?.message || "Failed to reach Admin App" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
