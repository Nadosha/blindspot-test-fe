export const getUserAvatar = (gender:{gender: string | undefined}) => {
    const avatars = {
        male: 'https://i.pinimg.com/564x/3c/b4/49/3cb4497b856d718c06d5d9575779a4e3.jpg',
        female: 'https://i.pinimg.com/564x/65/56/08/6556085337184f56dab477ebfcbf67a7.jpg'
    };

    return avatars[gender]
}