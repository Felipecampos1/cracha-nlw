const linksSocialMedia = {
  github: 'Felipecampos1',
  youtube: 'channel/UCh4UQhKz2x5mmgeo-pxrc8w',
  facebook: 'felipe.campos.71868964',
  instagram: 'fecampos15',
  twitter: 'FelipeC91577906'
}

function changerSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changerSocialMediaLinks()

function getGitHubProfileIndos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      bio.textContent = data.bio
      PhotoPerfil.src = data.avatar_url
    })
}

getGitHubProfileIndos()
