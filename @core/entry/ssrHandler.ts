import type { IncomingMessage, ServerResponse } from 'http';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSsrServer } from 'vite-ssr/dev';

type NextFunction = (err?: any) => void;

export const viteSsrDevHandler = async (app: any, api_prefix: string) => {
  const root = dirname(fileURLToPath(import.meta.url));
  const vite = await createSsrServer({
    root,
    build: {
      ssr: true,
    },
    server: {
      middlewareMode: 'ssr',
    },
  });

  app.use((req: IncomingMessage, res: ServerResponse, next: NextFunction) => {
    if (req.url!.startsWith(api_prefix)) next();
    else vite.middlewares(req, res, next);
  });
};
