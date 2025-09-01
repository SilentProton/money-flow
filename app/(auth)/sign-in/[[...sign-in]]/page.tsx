import Image from 'next/image'
import { Loader2 } from 'lucide-react'
import { SignIn, ClerkLoaded, ClerkLoading } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="h-full flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="text-center space-y-4 pt-12 md:pt-0">
          <h1 className="font-bold text-2xl md:text-3xl text-[#2E2A47]">
            Welcome Back!
          </h1>
          <p className="text-sm md:text-base text-[#7E8CA0]">
            Log in or create an account to get back to your dashboard!
          </p>
        </div>

        <div className="flex items-center justify-center mt-6 md:mt-10">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className='animate-spin text-muted-foreground'/>
          </ClerkLoading>
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center bg-blue-600">
        <Image src="/logo-white.svg" alt="App logo" width={200} height={200}/>
      </div>
    </div>
  )
}
