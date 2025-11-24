// Q5 Safe Access 
function getAvatar(user) {
  return user?.profile?.avatar?.url ?? 'No Avatar';
}
console.log(getAvatar({
  profile: { avatar: { url: "img.png" } }
}))

console.log(
  getAvatar({ profile: {} })
)