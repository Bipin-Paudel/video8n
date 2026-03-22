import { NextResponse } from "next/server";
import {
  buildVerificationResponse,
  getVerificationConfig,
} from "@/lib/url-ownership";

const prefixPath = "tiktok-verification";

const verifyPrefixRequest = () => {
  const { expectedPath, responseBody } = getVerificationConfig();

  if (!expectedPath || !responseBody) {
    return new NextResponse("Not Found", { status: 404 });
  }

  if (!expectedPath.startsWith(`${prefixPath}/`)) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return null;
};

export function GET() {
  const errorResponse = verifyPrefixRequest();

  if (errorResponse) {
    return errorResponse;
  }

  return buildVerificationResponse("GET");
}

export function HEAD() {
  const errorResponse = verifyPrefixRequest();

  if (errorResponse) {
    return errorResponse;
  }

  return buildVerificationResponse("HEAD");
}
