import { v2 as cloudinary } from "cloudinary";
export const uplaodImg = async (img) => {
  const folder = "/newsman";
  const imageConfig = {
    height: 768,
    width: 1280,
    folder,
    crop: "fit",
    quality: 90,
  };

  const imgObj = await cloudinary.uploader.upload(img, imageConfig);

  return imgObj.secure_url;
};
