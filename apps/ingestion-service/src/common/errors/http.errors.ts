import { HttpCode } from "../constants/http-code.constant.js";
import { AppError } from "./app.error.js";

export class BadRequestError extends AppError {
  public readonly statusCode = HttpCode.BAD_REQUEST;
  constructor(
    message = "Bad Request",
    detail = "Something went wrong with the request",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UnauthorizedError extends AppError {
  public readonly statusCode = HttpCode.UNAUTHORIZED;
  constructor(
    message = "Unauthorized",
    detail = "You are not authorized to access this resource",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ForbiddenError extends AppError {
  public readonly statusCode = HttpCode.FORBIDDEN;
  constructor(
    message = "Forbidden",
    detail = "You are not authorized to access this resource",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class NotFoundError extends AppError {
  public readonly statusCode = HttpCode.NOT_FOUND;
  constructor(
    message = "Resource not found",
    detail = "The requested resource was not found",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ConflictError extends AppError {
  public readonly statusCode = HttpCode.CONFLICT;
  constructor(
    message = "Conflict",
    detail = "A conflict occurred while processing the request",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class UnprocessableEntityError extends AppError {
  public readonly statusCode = HttpCode.UNPROCESSABLE_ENTITY;
  constructor(
    message = "Unprocessable Entity",
    detail = "The request was unable to be followed",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, true);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class InternalServerError extends AppError {
  public readonly statusCode = HttpCode.INTERNAL_SERVER_ERROR;
  constructor(
    message = "Internal Server Error",
    detail = "An internal server error occurred",
    context?: Record<string, unknown>,
  ) {
    super(message, detail, context, false);
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

// ─── Type Guard ───────────────────────────────────────────────────────────────

export interface HttpAppError extends AppError {
  statusCode: number;
}

export function isHttpError(err: AppError): err is HttpAppError {
  return (
    "statusCode" in err &&
    typeof (err as Record<string, unknown>).statusCode === "number"
  );
}
