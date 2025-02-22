import Container from './shared/container'
import { cn } from '../helpers/utils'
interface HeaderProps {
  className?: string
}
function Header(props: HeaderProps) {
  return (
    <div className={cn('bg-orange-700 h-24', props.className!)}>
      <Container className='h-full flex items-center'>
        <div className="flex flex-col space-y-2">
          <h1 className='font-bold text-white'>Company Wide Feedback</h1>
          <p className='text-sm text-white'>Feedback from all customers</p>
        </div>
      </Container>
    </div>
  )
}

export default Header