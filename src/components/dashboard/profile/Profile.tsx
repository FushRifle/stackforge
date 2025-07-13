import Image from 'next/image';

export default function UserProfileMini() {
    return (
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <Image
                    className="rounded-full h-10 w-10"
                    src="/user-avatar.jpg"
                    alt="User profile"
                    width={40}
                    height={40}
                />
            </div>
            <div className="ml-3 mb-3">
                <p className="text-sm font-medium text-gray-900">Subscribe Premium</p>
            </div>
        </div>
    );
}