# nodeprojects
collection of node projects

Install kubectl steps

1. Run below command 
    Remove-item alias:curl
2. download the kubectl package
    curl -LO "https://dl.k8s.io/release/v1.23.0/bin/windows/amd64/kubectl.exe"
3. check the kubectl checksum
    curl -LO "https://dl.k8s.io/v1.23.0/bin/windows/amd64/kubectl.exe.sha256"
4. Validate the kubectl binary against the checksum file:
    CertUtil -hashfile kubectl.exe SHA256
    type kubectl.exe.sha256
5. Using PowerShell to automate the verification using the -eq operator to get a True or False result:
    $($(CertUtil -hashfile .\kubectl.exe SHA256)[1] -replace " ", "") -eq $(type .\kubectl.exe.sha256)
6. check the kubectl version
    kubectl version --client
7. check if able to connect to cluster
    kubectl config current-context
8. register the ks cluster using clusterid
    ibmcloud ks cluster config --cluster c9ahi9qf0j9ojfebngag
9. connect to container registry
    ibmcloud cr region-set us-south

=======================================================
GIT Commands

1. Clone a Repository
    git clone https://github.com/fvinodh1978/nodeprojects.git
    
2. Pull a file
3. 
4. 
