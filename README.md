## 01: Boilerplate

In this video, the basic template for the app was set. The following things were accomplished by the end of this video

TODO:
- Create a new Expo (TypeScript) project.
- Layout of basic stack navigation.
- Folder structure coming into place with the addition of src folder.
- Linting configuration installation and setup.
- Custom fonts.

### Notes:
1. It should be noted that at the time of William's recording, the Expo version he used was SDK38. Now, at the time of creating this, Expo has as its stable release SDK44 with a beta preview of SDK45 recently released. Some breaking changes are to be expected, but not overly so. Also, the React Native version used in the video is v0.62.
3. The fonts used in the video are in the `.otf` format. However, in testing, it happened that the font format didn't play well on a number of Android phones. Hence, it was converted to `.ttf` as you will see in the repo.
4. William's custom linting config now comes with a base file for extension, that handles the majority of what was added in the tsconfig.json. The ones currently omitted in the version used at the time of writing have been added for strict compliance.
