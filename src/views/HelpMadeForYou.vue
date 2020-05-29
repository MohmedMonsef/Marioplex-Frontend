<template>
  <div class="col-sm-9 col-md-10 col-md-offset-4 content" id="article">
    <ul class="nav">
      <li>
        <a href="/Help">Home</a>
      </li>
      /
      <li>
        <a href="/HelpFixed/HelpAccountHelp">Account Help</a>
      </li>
    </ul>
    <div class="article-content">
      <h1 class="article-header">Made For You</h1>

      <p>
        Spotify makes loads of playlists just for you, based on your listening
        habits (what you like, share, save, skip) and the listening habits of
        others with similar taste.&nbsp;
      </p>

      <h2>Find playlists made for you</h2>

      <ul>
        <li>
          Find
          <strong>Made for you</strong> playlists in
          <strong>Home</strong>
          <img
            class="icon"
            src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_home.png"
          />.&nbsp;
        </li>
        <li>
          Or
          <strong>
            <a href="/HelpFixed/HelpAccountHelp">Search</a>&nbsp; </strong
          >the name of any playlist made for you.&nbsp;
        </li>
      </ul>
      <h3>New to Spotify?</h3>

      <p>
        We need to get to know you and the music you like, so expect to receive
        playlists made for you after a few weeks of listening.
      </p>

      <h2>Which playlists are made for you?</h2>

      <table border="0" cellpadding="20" cellspacing="2" bordeless>
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td class="leftrigth">
              <strong>What is it?</strong>
            </td>
            <td>
              <strong>How often does it update?</strong>
            </td>
          </tr>
          <tr>
            <td class="maketop">
              <strong>Daily Mix</strong>
            </td>
            <td class="makeborder">
              Up to 6 mixes based on genres you love. Songs include your regular
              listens and our recommendations.
            </td>
            <td class="maketop">
              The more you listen, the more frequently it updates.
            </td>
          </tr>
          <tr>
            <td class="maketop">
              <strong>Discover Weekly</strong>
            </td>
            <td class="makeborder">
              <p>Songs we think you’ll love.</p>
            </td>
            <td class="maketop">Every Monday.</td>
          </tr>
          <tr>
            <td class="maketop">
              <strong>Release Radar</strong>
            </td>
            <td class="makeborder">
              <p>Songs from new releases we think you’ll love.</p>
            </td>
            <td class="maketop">Every Friday.</td>
          </tr>
          <tr>
            <td class="maketop">
              <strong>On Repeat and Repeat Rewind</strong>
            </td>
            <td class="leftrigth">
              <p>Songs you couldn’t get enough of recently, and in the past.</p>
            </td>
            <td class="maketop">Every 5 days.</td>
          </tr>
        </tbody>
      </table>
      <h2>Save playlists made for you</h2>

      <p>
        Select
        <img
          src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_heart.png"
        />&nbsp;on a playlist to save it to
        <a href="/HelpFixed/HelpAccountHelp">
          <strong>Your Library</strong> </a
        >.&nbsp;
      </p>

      <p>
        Playlists made for you update regularly to stay fresh. You can’t save
        (or recover) a particular version of it, but you can:
      </p>

      <ul>
        <li>
          <a href="/HelpFixed/HelpAccountHelp">Create your own playlist</a> and
          add all the tracks to that.
        </li>
        <li>
          Select
          <img
            src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_heart.png"
          />&nbsp;on any song to save it to your
          <strong>Liked Songs</strong> playlist in
          <a href="/HelpFixed/HelpAccountHelp">
            <strong>Your Library</strong> </a
          >.
        </li>
      </ul>
      <h2>Improve playlists made for you</h2>

      <p>
        The more you use Spotify, the better the playlists made for you
        become.&nbsp;
      </p>

      <p>You can also tell us what you like and what you don’t like:</p>

      <ul>
        <li>
          Tap
          <img
            src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_heart.png"
          />&nbsp;in the
          <a href="/HelpFixed/HelpAccountHelp">Now Playing</a> view to like a
          song, which automatically saves it to your
          <strong>Liked Songs</strong> playlist
          <a href="/HelpFixed/HelpAccountHelp">Your Library</a>.
        </li>
        <li>
          Tap
          <img
            src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_no.png"
          />&nbsp;in the
          <a href="/HelpFixed/HelpAccountHelp">Now Playing</a> view to remove it
          and we’ll remember for next time.
        </li>
      </ul>
      <p>
        <strong>Tip:</strong>Accidentally tap&nbsp;
        <img
          src="https://spotifysupport.freetls.fastly.net/article-gallery/articles2/inline_icons/icon_no.png"
        />&nbsp;on something you didn't mean to? Check out how to
        <a href="/HelpFixed/HelpAccountHelp">undo hidden songs</a>.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HelpMadeForYou",
};
</script>
<style scoped>
#article {
  padding-bottom: 100px;
}
.nav {
  margin: 50px 0px;
  background-color: transparent;
}
a {
  margin: 5px;
  font-weight: 700;
  font-size: 17px;
  color: rgb(14, 14, 185);
}
a:hover {
  color: rgb(2, 2, 87);
  text-decoration: none;
}
.article-header {
  font-size: 70px;
  font-weight: 500;
}
p {
  font-weight: 450;
}
h2 {
  margin: 50px 0px;
  font-weight: 700;
}
table {
  border-collapse: collapse;
}

.makeborder {
  border: 1px solid rgb(77, 72, 72);
}
.maketop {
  border-top: 1px solid rgb(77, 72, 72);
}
.leftrigth {
  border-right: 1px solid rgb(77, 72, 72);
  border-left: 1px solid rgb(77, 72, 72);
}
</style>
