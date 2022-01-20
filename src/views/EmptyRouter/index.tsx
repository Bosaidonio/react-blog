import { Outlet } from 'react-router-dom'
import { useEffect, FC } from 'react'

interface EmptyRouterProps {
  isFinished?: boolean
  setIsFinished?: (arg: boolean) => void
}

const EmptyRouter: FC<EmptyRouterProps> = ({ isFinished, setIsFinished }) => {
  useEffect(() => {
    setTimeout(() => {
      setIsFinished && setIsFinished(!isFinished)
    }, 300)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <>
      <Outlet />
    </>
  )
}

export default EmptyRouter
