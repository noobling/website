/** @jsx jsx */
import { jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { Theme } from 'lib/theme'

// Taken from https://materialdesignicons.com/
export const iconsList = {
  bitbucket: {
    viewbox: '0 0 24 24',
    path:
      'M2.65 3C2.3 3 2 3.3 2 3.65C2 3.69 2 3.73 2 3.77L4.73 20.27C4.8 20.69 5.16 21 5.58 21H18.63C18.94 21 19.22 20.78 19.27 20.46L22 3.77C22.05 3.42 21.81 3.09 21.46 3.04C21.43 3.03 21.39 3.03 21.35 3.03L2.65 3M14.1 14.95H9.94L8.81 9.07H15.11L14.1 14.95Z'
  },
  discord: {
    viewbox: '0 0 24 24',
    path:
      'M22,24L16.75,19L17.38,21H4.5A2.5,2.5 0 0,1 2,18.5V3.5A2.5,2.5 0 0,1 4.5,1H19.5A2.5,2.5 0 0,1 22,3.5V24M12,6.8C9.32,6.8 7.44,7.95 7.44,7.95C8.47,7.03 10.27,6.5 10.27,6.5L10.1,6.33C8.41,6.36 6.88,7.53 6.88,7.53C5.16,11.12 5.27,14.22 5.27,14.22C6.67,16.03 8.75,15.9 8.75,15.9L9.46,15C8.21,14.73 7.42,13.62 7.42,13.62C7.42,13.62 9.3,14.9 12,14.9C14.7,14.9 16.58,13.62 16.58,13.62C16.58,13.62 15.79,14.73 14.54,15L15.25,15.9C15.25,15.9 17.33,16.03 18.73,14.22C18.73,14.22 18.84,11.12 17.12,7.53C17.12,7.53 15.59,6.36 13.9,6.33L13.73,6.5C13.73,6.5 15.53,7.03 16.56,7.95C16.56,7.95 14.68,6.8 12,6.8M9.93,10.59C10.58,10.59 11.11,11.16 11.1,11.86C11.1,12.55 10.58,13.13 9.93,13.13C9.29,13.13 8.77,12.55 8.77,11.86C8.77,11.16 9.28,10.59 9.93,10.59M14.1,10.59C14.75,10.59 15.27,11.16 15.27,11.86C15.27,12.55 14.75,13.13 14.1,13.13C13.46,13.13 12.94,12.55 12.94,11.86C12.94,11.16 13.45,10.59 14.1,10.59Z'
  },
  facebook: {
    viewbox: '0 0 24 24',
    path:
      'M13.8576 23.9999V13.0511H17.5296L18.0816 8.78391H13.8576V6.06231C13.8576 4.82871 14.1984 3.98391 15.9744 3.98391H18.24V0.143913C17.1442 0.0366489 16.0434 -0.011421 14.9424 -8.69234e-05C11.6832 -8.69234e-05 9.45121 1.98711 9.45121 5.63991V8.78391H5.76001V13.0511H9.44641V23.9999H13.8576Z'
  },
  github: {
    viewbox: '0 0 24 24',
    path:
      'M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z'
  },
  gitlab: {
    viewbox: '0 0 24 24',
    path:
      'M21.94 13.11L20.89 9.89C20.89 9.86 20.88 9.83 20.87 9.8L18.76 3.32C18.65 3 18.33 2.75 17.96 2.75C17.6 2.75 17.28 3 17.17 3.33L15.17 9.5H8.84L6.83 3.33C6.72 3 6.4 2.75 6.04 2.75H6.04C5.67 2.75 5.35 3 5.24 3.33L3.13 9.82C3.13 9.82 3.13 9.83 3.13 9.83L2.06 13.11C1.9 13.61 2.07 14.15 2.5 14.45L11.72 21.16C11.89 21.28 12.11 21.28 12.28 21.15L21.5 14.45C21.93 14.15 22.1 13.61 21.94 13.11M8.15 10.45L10.72 18.36L4.55 10.45M13.28 18.37L15.75 10.78L15.85 10.45H19.46L13.87 17.61M17.97 3.94L19.78 9.5H16.16M14.86 10.45L13.07 15.96L12 19.24L9.14 10.45M6.03 3.94L7.84 9.5H4.23M3.05 13.69C2.96 13.62 2.92 13.5 2.96 13.4L3.75 10.97L9.57 18.42M20.95 13.69L14.44 18.42L14.46 18.39L20.25 10.97L21.04 13.4C21.08 13.5 21.04 13.62 20.95 13.69'
  },
  instagram: {
    viewbox: '0 0 24 24',
    path:
      'M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z'
  },
  linkedin: {
    viewbox: '0 0 24 24',
    path:
      'M5.68801 6.31665H0.633606V23.9998H5.68801V6.31665Z M17.6832 6.31665C14.16 6.31665 13.5504 7.60305 13.2624 8.84145V6.31665H8.21277V23.9998H13.2624V13.8959C13.2624 12.2591 14.1504 11.3711 15.7872 11.3711C17.424 11.3711 18.312 12.2399 18.312 13.8959V23.9998H23.3664V15.1582C23.3664 10.1039 22.7088 6.31665 17.6832 6.31665Z M3.15841 5.0496C4.55281 5.0496 5.68321 3.91921 5.68321 2.5248C5.68321 1.13039 4.55281 0 3.15841 0C1.764 0 0.633606 1.13039 0.633606 2.5248C0.633606 3.91921 1.764 5.0496 3.15841 5.0496Z'
  },
  twitter: {
    viewbox: '0 0 24 24',
    path:
      'M7.5456 21.7488C16.6032 21.7488 21.5568 14.2464 21.5568 7.73756C21.5568 7.52636 21.5568 7.31036 21.5568 7.09916C22.5153 6.40234 23.3425 5.54099 24 4.55516C23.1015 4.95259 22.1485 5.21308 21.1728 5.32796C22.2005 4.71318 22.9698 3.74599 23.3376 2.60636C22.3701 3.1802 21.3117 3.58442 20.208 3.80156C19.4651 3.0131 18.4832 2.49129 17.4141 2.31681C16.3449 2.14233 15.248 2.32489 14.293 2.83626C13.338 3.34764 12.5781 4.15935 12.1306 5.14593C11.6832 6.1325 11.5732 7.239 11.8176 8.29436C9.85999 8.19608 7.94493 7.68718 6.19677 6.8007C4.44861 5.91422 2.90645 4.66997 1.6704 3.14876C1.04195 4.23291 0.849978 5.51571 1.13351 6.73635C1.41705 7.95698 2.15481 9.02382 3.1968 9.71996C2.41389 9.70209 1.64675 9.49631 0.96 9.11996V9.18236C0.959686 10.3196 1.35296 11.4219 2.07305 12.3021C2.79313 13.1823 3.79565 13.7862 4.9104 14.0112C4.18593 14.2094 3.42567 14.2389 2.688 14.0976C3.00287 15.0753 3.6153 15.9303 4.43973 16.543C5.26416 17.1557 6.2594 17.4956 7.2864 17.5152C5.54286 18.8856 3.38888 19.6295 1.1712 19.6272C0.779447 19.6213 0.388376 19.5924 0 19.5408C2.25078 20.9865 4.87049 21.7531 7.5456 21.7488Z'
  }
}

const SocialIcons = ({ dimensions, fill, icon, ...props }: Props) => {
  const theme: Theme = useTheme()
  return (
    <svg
      fill={theme.colors[fill]}
      height={dimensions}
      width={dimensions}
      viewBox={iconsList[icon].viewbox}
      aria-label={icon}
      role='img'
      {...props}
    >
      <title>{icon}</title>
      <path d={iconsList[icon].path} />
    </svg>
  )
}

export default SocialIcons

interface Props {
  icon: keyof typeof iconsList
  dimensions: number
  fill: keyof Theme['colors']
  className?: string
}
