
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT_DIR = __dirname;

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml"
};

const server = http.createServer((req, res) => {
  const pathname = decodeURIComponent(
    (req.url || "/").split("?")[0]
  );

  const requestedFile =
    pathname === "/" ? "index.html" : pathname.slice(1);

  const filePath = path.resolve(ROOT_DIR, requestedFile);

  if (
    filePath !== ROOT_DIR &&
    !filePath.startsWith(ROOT_DIR + path.sep)
  ) {
    res.writeHead(403);
    return res.end("Forbidden");
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      res.writeHead(404, {
        "Content-Type": "text/plain; charset=utf-8"
      });
      return res.end("404 - File not found");
    }

    const type =
      MIME_TYPES[path.extname(filePath).toLowerCase()] ||
      "application/octet-stream";

    res.writeHead(200, {
      "Content-Type": type
    });

    res.end(content);
  });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`X7 Team server running on port ${PORT}`);
});
