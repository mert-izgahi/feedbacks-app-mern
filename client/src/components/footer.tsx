import Container from './shared/container'

function Footer() {
  return (
    <div className='h-16 bg-stone-50 dark:bg-stone-900 border-t border-stone-200 dark:border-stone-800'>
      <Container className='h-full flex items-center justify-center'>
        <p className='text-sm text-stone-600 dark:text-stone-400'>
          &copy; {new Date().getFullYear()} Feedbacks - All rights reserved
        </p>
      </Container>
    </div>
  )
}

export default Footer