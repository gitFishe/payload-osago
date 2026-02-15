import localFont from 'next/font/local'

export const circe = localFont({
    src: [
        { path: '../../public/fonts/circe/Circe-Thin.woff',       weight: '100', style: 'normal' },
        { path: '../../public/fonts/circe/Circe-ExtraLight.woff', weight: '200', style: 'normal' },
        { path: '../../public/fonts/circe/Circe-Light.woff',      weight: '300', style: 'normal' },
        { path: '../../public/fonts/circe/Circe-Regular.woff',    weight: '400', style: 'normal' },
        { path: '../../public/fonts/circe/Circe-Bold.woff',       weight: '700', style: 'normal' },
        { path: '../../public/fonts/circe/Circe-ExtraBold.woff',  weight: '800', style: 'normal' },
    ],
    variable: '--font-circe',
    display: 'swap',
})
