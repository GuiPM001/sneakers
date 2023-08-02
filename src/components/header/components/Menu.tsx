import Link from '../../../utils/Link';

export default function Menu() {
  return (
    <div className="px-2 fixed md:static z-10 md:px-0 py-3 space-y-2 w-full md:space-y-0 md:space-x-2 font-medium text-slate-700">
      <Link label='Collections' path='/collections' />
      <Link label='Men' path='/men' />
      <Link label='Women' path='/women' />
      <Link label='About' path='/about' />
      <Link label='Contact' path='/contact' />
    </div>
  )
}