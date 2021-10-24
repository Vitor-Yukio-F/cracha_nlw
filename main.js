const links_social_media = {
  github: 'Vitor-Yukio-F',
  youtube: 'loonatheworld',
  facebook: 'loonatheworld',
  instagram: 'looonatheworld',
  twitter: 'loonatheworld'
}

function change_social_media_links() {
  for (let li of social_links.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${links_social_media[social]}`
  }
}

change_social_media_links()

function get_github_profile_infos() {
  const url = `https://api.github.com/users/${links_social_media.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      username.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

get_github_profile_infos()
