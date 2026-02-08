import { ImageResponse } from "next/og";


export const runtime = "edge"

export async function GET(request){
    const {searchParams} = new URL(request.url);
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return ImageResponse((
        <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "black",
                    color: "white",
                    fontSize: 70,
                    fontWeight: "bold",
                }}
            >
                {title}
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    )
}