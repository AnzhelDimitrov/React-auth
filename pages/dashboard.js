import { auth } from '../utils/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';

const Dashboard = () => {
    const [user, loading] = useAuthState(auth);
    const route = useRouter();

    if(loading) return <h1>Loading..</h1>
    if(!user) route.push('/auth/login')
    if(user)
        return (
            <div className='shadow-xl mx-auto mt-28 p-10 text-gray-700 rounded-lg w-1/2'>
                <h1 className='text-xl'>Welcome to your dashboard <span className='text-pink-500'>{user.displayName}</span></h1>
                <button className='py-2 px-4 mt-6 text-lg text-white bg-pink-500 rounded-lg font-medium ml-8' 
                        onClick={() => auth.signOut()}>
                            Sign out
                </button>
            </div>
        )
}

export default Dashboard;