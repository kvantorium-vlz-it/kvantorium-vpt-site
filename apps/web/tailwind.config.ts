import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"
import defaultTheme from 'tailwindcss/defaultTheme'

const defaultFontFamily = ['"Exo 2"', ...defaultTheme.fontFamily.serif]

const config: Partial<Config> = {
    darkMode: ["class"],
    safelist: ["dark"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                tablet: '1.5rem',
                laptop: '2rem',
                desktop: '2rem',
            },
        },

        screens: {
            tablet: '768px',
            laptop: '1024px',
            desktop: '1440px',
        },

        fontFamily: {
            DEFAULT: defaultFontFamily,

            serif: defaultFontFamily,
            'body': ['circe', ...defaultTheme.fontFamily.sans],
            'display': ['BankGothic', ...defaultTheme.fontFamily.serif],
        },

        fontSize: {
            'body-extra-small': '0.875rem',
            'body-small': '1rem',
            'body': '1.25rem',
            'heading-6': '1.25rem',
            'heading-5': '1.5rem',
            'heading-4': '2rem',
            'heading-3': '2.5rem',
            'heading-2': '3rem',
            'heading-1': '4rem',
        },

        fontWeight: {
            regular: '400',
            bold: '700',
        },

        lineHeight: {
            body: '175%',
            heading: '150%',
            input: '120%',
        },

        colors: {
            transparent: 'transparent',
            black: {
                DEFAULT: 'hsl(var(--black))',
            },
            white: {
                DEFAULT: 'hsl(var(--white))',
            },
            gray: {
                light: 'hsl(var(--gray-light))',
                DEFAULT: 'hsl(var(--gray))',
                dark: 'hsl(var(--gray-dark))',
            },
            blue: {
                light: 'hsl(var(--blue-light))',
                DEFAULT: 'hsl(var(--blue))',
                dark: 'hsl(var(--blue))',
                muted: 'hsl(var(--blue-muted))',
            },
        },

        extend: {
            backgroundImage: {
                'hero-image': "url('/hero-background-alpha.png')",
                'hero-noice': "url('/noise.png')",
            },

            colors: {
                /* Default background color of <body />...etc */
                background: "hsl(var(--white))",
                foreground: "hsl(var(--blue-dark))",

                /* Muted backgrounds such as <TabsList />, <Skeleton /> and <Switch /> */
                muted: {
                    DEFAULT: "hsl(var(--gray-light))",
                    foreground: "hsl(var(--gray-dark))",
                },

                /* Background color for <Card /> */
                card: {
                    DEFAULT: "hsl(var(--white))",
                    foreground: "hsl(var(--blue-dark))",
                },

                /* Background color for popovers such as <DropdownMenu />, <HoverCard />, <Popover /> */
                popover: {
                    DEFAULT: "hsl(var(--white))",
                    foreground: "hsl(var(--blue-dark))",
                },

                /* Default border color */
                border: "hsl(var(--gray))",

                /* Border color for inputs such as <Input />, <Select />, <Textarea /> */
                input: "hsl(var(--gray))",

                /* Primary colors for <Button /> */
                primary: {
                    DEFAULT: "hsl(var(--blue))",
                    foreground: "hsl(var(--white))",
                },

                /* Secondary colors for <Button /> */
                secondary: {
                    DEFAULT: "hsl(var(--blue-light))",
                    foreground: "hsl(var(--white))",
                },

                /* Used for accents such as hover effects on <DropdownMenuItem>, <SelectItem>...etc */
                accent: {
                    DEFAULT: "hsl(var(--blue-light))",
                    foreground: "hsl(var(--white))",
                },

                /* Used for destructive actions such as <Button variant="destructive"> */
                destructive: {
                    DEFAULT: "hsl(var(--red))",
                    foreground: "hsl(var(--white))",
                },

                /* Used for focus ring */
                ring: "hsl(var(--gray))",


                // border: "hsl(var(--border))",
                // input: "hsl(var(--input))",
                // ring: "hsl(var(--ring))",
                // background: "hsl(var(--background))",
                // foreground: "hsl(var(--foreground))",
                // primary: {
                //     DEFAULT: "hsl(var(--p rimary))",
                //     foreground: "hsl(var(--primary-foreground))",
                // },
                // secondary: {
                //     DEFAULT: "hsl(var(--secondary))",
                //     foreground: "hsl(var(--secondary-foreground))",
                // },
                // destructive: {
                //     DEFAULT: "hsl(var(--destructive))",
                //     foreground: "hsl(var(--destructive-foreground))",
                // },
                // muted: {
                //     DEFAULT: "hsl(var(--muted))",
                //     foreground: "hsl(var(--muted-foreground))",
                // },
                // accent: {
                //     DEFAULT: "hsl(var(--accent))",
                //     foreground: "hsl(var(--accent-foreground))",
                // },
                // popover: {
                //     DEFAULT: "hsl(var(--popover))",
                //     foreground: "hsl(var(--popover-foreground))",
                // },
                // card: {
                //     DEFAULT: "hsl(var(--card))",
                //     foreground: "hsl(var(--card-foreground))",
                // },
            },

            borderRadius: {
                xl: "calc(var(--radius) + 4px)",
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },

            keyframes: {
                "accordion-down": {
                    from: { height: '0px' },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: '0px' },
                },
                "collapsible-down": {
                    from: { height: '0px' },
                    to: { height: 'var(--radix-collapsible-content-height)' },
                },
                "collapsible-up": {
                    from: { height: 'var(--radix-collapsible-content-height)' },
                    to: { height: '0px' },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-in-out",
                "collapsible-up": "collapsible-up 0.2s ease-in-out",
            },
        }
    },
    plugins: [animate],
}

export default config
