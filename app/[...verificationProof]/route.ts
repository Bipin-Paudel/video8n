import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    verificationProof?: string[];
  }>;
};

const normalizePath = (value: string) => value.replace(/^\/+|\/+$/g, "");

export async function GET(_: Request, context: RouteContext) {
  const expectedPath = normalizePath(
    process.env.URL_OWNERSHIP_VERIFICATION_PATH ?? "",
  );
  const responseBody = process.env.URL_OWNERSHIP_VERIFICATION_CONTENT ?? "";

  if (!expectedPath || !responseBody) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const params = await context.params;
  const requestedPath = normalizePath(
    (params.verificationProof ?? []).join("/"),
  );

  if (requestedPath !== expectedPath) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return new NextResponse(responseBody.endsWith("\n") ? responseBody : `${responseBody}\n`, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=60",
      "Content-Type":
        process.env.URL_OWNERSHIP_VERIFICATION_CONTENT_TYPE ??
        "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
    status: 200,
  });
}
