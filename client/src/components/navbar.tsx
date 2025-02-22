import Container from "./shared/container"
import ThemeToggler from "./theme-toggler"

function Navbar() {
  return (
    <div className="bg-stone-50 dark:bg-stone-900 h-16 border-b border-stone-200 dark:border-stone-800">
      <Container className="h-full flex items-center justify-between">
        <h1 className="font-bold text-primary">Feedbacks</h1>
        <ThemeToggler />
      </Container>
    </div>
  )
}

export default Navbar