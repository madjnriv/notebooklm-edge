import z from "zod";
import dotenv from "dotenv";

dotenv.config();

const envVariablesSchema = z.object({
  // APP
  PORT: z.coerce.number().int().positive().default(9090),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export type Env = z.infer<typeof envVariablesSchema>;

const parsed = envVariablesSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    parsed.error.issues
      .map((issue) => `${issue.path.join(".") || "env"}: ${issue.message}`)
      .join("\n"),
  );
}

export const env = parsed.data;
