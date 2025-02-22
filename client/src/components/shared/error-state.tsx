import Container from './container'

interface ErrorStateProps {
    error: string
}

function ErrorState({error}: ErrorStateProps) {
  return (
    <Container className='h-64 bg-stone-50 dark:bg-stone-900 flex items-center justify-center'>
        <p className='text-sm text-stone-600 dark:text-stone-400'>{error}</p>
    </Container>
  )
}

export default ErrorState