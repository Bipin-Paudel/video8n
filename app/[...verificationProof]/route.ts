import { NextResponse } from "next/server";
import {
  buildVerificationResponse,
  getVerificationConfig,
  normalizeVerificationPath,
} from "@/lib/url-ownership";

type RouteContext = {
  params: Promise<{
    verificationProof?: string[];
  }>;
};

const verifyPathRequest = async (context: RouteContext) => {
  const { expectedPath, responseBody } = getVerificationConfig();

  if (!expectedPath || !responseBody) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const params = await context.params;
  const requestedPath = normalizeVerificationPath(
    (params.verificationProof ?? []).join("/"),
  );

  if (requestedPath !== expectedPath) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return null;
};

export async function GET(_: Request, context: RouteContext) {
  const errorResponse = await verifyPathRequest(context);

  if (errorResponse) {
    return errorResponse;
  }

  return buildVerificationResponse("GET");
}

export async function HEAD(_: Request, context: RouteContext) {
  const errorResponse = await verifyPathRequest(context);

  if (errorResponse) {
    return errorResponse;
  }

  return buildVerificationResponse("HEAD");
}
