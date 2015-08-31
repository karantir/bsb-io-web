# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.box_check_update = false
  config.vm.network :forwarded_port, guest: 80, host: 8000
  config.vm.network :forwarded_port, guest: 22,   host: 2221, id: "ssh"
  config.vm.hostname = "moss"
  config.vm.provider "virtualbox" do |v|
    v.memory = 512
  end
  config.ssh.private_key_path = "~/.vagrant.d/insecure_private_key"
  config.ssh.insert_key = false
  # config.vm.provision "ansible" do |ansible|
  #   ansible.playbook = "ops/provision.yml"
  # end
end