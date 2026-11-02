import { app } from "./app.controller.js";
import { env } from "./common/config/env.js";

function bootstrap() {
  const PORT = env.PORT;

  app.listen(PORT, () => {
    console.log(`Ingestion service running on http://localhost:${PORT}`);
  });
}

bootstrap();
