import { Block, Container, Button, Title, Text, Stack } from '@ui8kit/core'
import { ThemeProvider, useTheme } from '@/providers/theme' // skyOSTheme, modernUITheme, lesseUITheme

// LesseUI Theme
export const lesseUITheme = {
  name: "LesseUI",
  rounded: {
    // none | default | sm | md | lg | xl | "2xl" | "3xl" | full
    default: "sm" as const,
    button: "md" as const,
    badge: "xl" as const
  },
  buttonSize: {
    // xs | sm | default | md | lg | xl | icon
    default: "sm" as const,
    badge: "sm" as const
  },
  isNavFixed: true
} as const;

function AppContent() {
  const { toggleDarkMode, isDarkMode } = useTheme()

  return (
    <Block variant="section" py="xl">
      <Container>
      <Stack gap="lg" align="center" ta="center">
      <Title size="4xl">Welcome to UI8Kit</Title>
      <Text>Create beautiful web applications with ease using our UI components</Text>
        <Button variant={isDarkMode ? 'primary' : 'secondary'} onClick={toggleDarkMode}>
          {!isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </Button>
        </Stack>
      </Container>
    </Block>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={lesseUITheme}>
      <AppContent />
    </ThemeProvider>
  )
}
