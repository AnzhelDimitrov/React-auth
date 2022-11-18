import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../utils/firebase';

const Nav = () => {

    const [ user, loading ] = useAuthState(auth);

    return (
        <nav className='flex justify-between items-center mt-10 mx-10'>
            <Link href={"/"}>Home</Link>
            <ul>
                {!user && (
                    <Link legacyBehavior href={'/auth/login'}>
                        <a className='py-2 px-4 text-lg text-white 
                        bg-pink-500 rounded-lg 
                        font-medium ml-8'>
                            Join now
                        </a>
                    </Link>
                )}
                {user && (
                    <div>
                        <Link href={'/dashboard'}>
                            <img src={user.photoURL} 
                            alt="avatar" 
                            referrerPolicy='no-referrer'
                            className='w-16 rounded-full mx-auto'
                            />
                        </Link>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Nav;
