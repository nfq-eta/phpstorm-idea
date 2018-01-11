## NFQ ETA team PHPStorm settings
> This is the settings that are used by **ETA** team members and are synced between them. When you set them up on your local PHPStorm, your local settings will be automatically synchronized with the settings stored in the repository each time you perform an Update Project or a Push operation, or when you close your project or exit PhpStorm.

##### First setup:
1. In PHPStorm go to **File | Settings | Preferences** (Ctrl+Alt+S).
2. Expand the **Tools** node and choose **Settings Repository**.
3. Specify the URL of this repository, and click **Overwrite Local** (if it's cleanly installed PHPStorm) or **Merge** if you already have some settings setted up (if there are any conflicts, try to resolve them leaning more to the repository settings).

##### Updating:
1. After first setup, change existing settings in PHPStorm locally
2. In PHPStorm go to **File | Settings Repository**
3. Check if the **Upstream url** is correct and click **Overwrite Remote**
4. Log your changes in the **changelog.md** file
