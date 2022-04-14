Tips and Tricks

Install kubectl steps

Run below command Remove-item alias:curl
download the kubectl package curl -LO "https://dl.k8s.io/release/v1.23.0/bin/windows/amd64/kubectl.exe"
check the kubectl checksum curl -LO "https://dl.k8s.io/v1.23.0/bin/windows/amd64/kubectl.exe.sha256"
Validate the kubectl binary against the checksum file: CertUtil -hashfile kubectl.exe SHA256 type kubectl.exe.sha256
Using PowerShell to automate the verification using the -eq operator to get a True or False result: $($(CertUtil -hashfile .\kubectl.exe SHA256)[1] -replace " ", "") -eq $(type .\kubectl.exe.sha256)
check the kubectl version kubectl version --client
check if able to connect to cluster kubectl config current-context

===============================================================

GIT Commands

1. View all settings and where they are coming from using:
	git config --list --show-origin

2. Set your user name and email address. This is important because every Git commit uses this information
	git config --global user.name "John Doe"
	git config --global user.email johndoe@example.com

3. Configure the default text editor
	git config --global core.editor emacs
	git config --global core.editor "'C:/Program Files/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"

4. To set main as the default branch name do:
	git config --global init.defaultBranch main

5. Checking Your configuration Settings
	git config --list

6. To display specific key’s value
	git config user.name

7. Initializing a Repository in an Existing Directory(This creates a new subdirectory named .git that contains all of your necessary repository files -a Git repository skeleton)
	cd /home/user/my_project
	git init

8. start version-controlling existing files /Staging Modified Files
	git add *.c
	git add LICENSE

9. Cloning an Existing Repository from git hub
	git clone https://github.com/fvinodh1978/NodeProjects.git

10. Checking the Status of Your Files
	git status

11. Short Status
	git status -s

12. Ignoring Files
	
13. To see what you’ve changed but not yet staged
	git diff

13. To see what you’ve changed but not yet staged(both below commands same)
	git diff --staged
	git diff --cached

14. Commit the changes
	git commit -m "Hello World : Changed the messages"

15. Removing Files
	rm PROJECTS.md
