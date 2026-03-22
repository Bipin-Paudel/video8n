import { NextResponse } from "next/server";

const DEFAULT_CONTENT_TYPE = "text/plain; charset=utf-8";

export const normalizeVerificationPath = (value: string) =>
  value.replace(/^\/+|\/+$/g, "");

export const getVerificationConfig = () => {
  const expectedPath = normalizeVerificationPath(
    process.env.URL_OWNERSHIP_VERIFICATION_PATH ?? "",
  );
  const responseBody = process.env.URL_OWNERSHIP_VERIFICATION_CONTENT ?? "";
  const contentType =
    process.env.URL_OWNERSHIP_VERIFICATION_CONTENT_TYPE ?? DEFAULT_CONTENT_TYPE;

  return {
    contentType,
    expectedPath,
    responseBody,
  };
};

export const buildVerificationResponse = (method: "GET" | "HEAD") => {
  const { contentType, responseBody } = getVerificationConfig();

  return new NextResponse(method === "HEAD" ? null : responseBody, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
      "Content-Type": contentType,
      "X-Robots-Tag": "noindex",
    },
    status: 200,
  });
};
