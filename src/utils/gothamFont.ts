import localFont from "next/font/local"

const gothamFont = localFont({
    src: [
        {
            path: "../fonts/Gotham/Gotham-Thin.otf",
            weight: "100",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-XLight.otf",
            weight: "200",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Light.otf",
            weight: "300",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Book.otf",
            weight: "400",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Medium.otf",
            weight: "500",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Bold.otf",
            weight: "600",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Black.otf",
            weight: "700",
            style: "normal"
        },
        {
            path: "../fonts/Gotham/Gotham-Ultra.otf",
            weight: "800",
            style: "normal"
        }
    ],
    variable: "--font-gotham"
})

export { gothamFont }
