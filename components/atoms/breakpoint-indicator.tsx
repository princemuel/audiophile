export function BreakpointIndicator() {
  if (process.env.NODE_ENV === 'production') return null;
  return (
    <div className='fixed bottom-4 right-4 z-[99] flex h-10 w-10 animate-pulse items-center justify-center rounded-full bg-gray-800 p-8 font-mono text-base text-white'>
      <p className='block s:hidden'>base</p>
      <p className='hidden s:block sx:hidden'>s</p>
      <p className='hidden sx:block sm:hidden'>sx</p>
      <p className='hidden sm:block md:hidden'>sm</p>
      <p className='hidden md:block lg:hidden'>md</p>
      <p className='hidden lg:block xl:hidden'>lg</p>
      <p className='hidden xl:block 2xl:hidden'>xl</p>
      <p className='hidden 2xl:block'>2xl</p>
    </div>
  );
}
