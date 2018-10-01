# How to install kubernetes on your local dev machine

Prerequisites : docker installed

from : https://kubernetes.io/docs/tasks/tools/install-minikube/

## install on mac

1. install kubctl 'brew install kubernetes-cli'
2. install minikube : 'brew cask install minikube'
3. follow instruction to install the hyperkit driver : https://github.com/kubernetes/minikube/blob/master/docs/drivers.md#hyperkit-driver
4. launch minikube 'minikube start --vm-driver=hyperkit'
5. `minikube dashboard` to open the dashboard

Known Issues
------------
if you set up a loadBalancer service from , the `kubectl get services`command will state pending for the external ip

use this command to get the adress of the load balancer `minikube service <service_name_loadbalancer> --namespace=`