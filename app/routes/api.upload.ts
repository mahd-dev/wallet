import { Upload } from "@aws-sdk/lib-storage";
import { ActionFunctionArgs, json } from "@remix-run/node";

import { S3Client } from "@aws-sdk/client-s3";

import mime from "mime";
import { authenticator } from "~/auth.server";

export const uploadBlob = async (file: Blob) => {
  const buffer = await file.arrayBuffer();
  const checksum = await Array.from(
    new Uint8Array(await crypto.subtle.digest("SHA-1", buffer)),
  )
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const ext = mime.getExtension(file.type);

  const upload = new Upload({
    client: new S3Client({
      endpoint: `${process.env.S3_HOST}`,
      region: process.env.S3_REGION || "auto",
      credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY || "",
        secretAccessKey: process.env.S3_SECRET_KEY || "",
      },
      forcePathStyle: true,
    }),
    params: {
      Bucket: process.env.S3_BUCKET,
      Key: `${checksum}.${ext}`,
      Body: Buffer.from(buffer),
    },
  });

  return await upload.done();
};

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticator.isAuthenticated(request, {
    failureRedirect: "/auth",
  });

  const body = await request.formData();
  const file = body.get("file");

  if (!file || !(file instanceof File)) {
    return json({ success: false, message: "File missing" }, { status: 400 });
  }
  if (!/^image\/(apng|avif|gif|jpeg|png|svg+xml|webp)$/.test(file.type)) {
    return json(
      { success: false, message: "The file format is not supported" },
      { status: 400 },
    );
  }

  try {
    return await uploadBlob(file);
  } catch (error) {
    console.error(error);
    return json({ error }, { status: 500 });
  }
};
