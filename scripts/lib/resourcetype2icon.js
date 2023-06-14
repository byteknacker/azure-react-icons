import * as AzureIcons from ".";

const ResourceType2IconMap = {
  "Microsoft.Network/networkWatchers": AzureIcons.AzNetworkWatcher,
  "Microsoft.ContainerService/managedClusters": AzureIcons.AzKubernetesServices,
  "Microsoft.Network/privateDnsZones": AzureIcons.AzDNSZones,
  "Microsoft.Network/virtualNetworks": AzureIcons.AzVirtualNetworks,
  "Microsoft.Compute/disks": AzureIcons.AzDisks,
  "Microsoft.Compute/virtualMachines": AzureIcons.AzVirtualMachine,
  "Microsoft.KeyVault/vaults": AzureIcons.AzKeyVaults,
  "Microsoft.Network/applicationGateways": AzureIcons.AzApplicationGateways,
  "Microsoft.Network/dnszones": AzureIcons.AzDNSZones,
  "Microsoft.Network/networkSecurityGroups": AzureIcons.AzNetworkSecurityGroup,
  "Microsoft.Storage/storageAccounts": AzureIcons.AzStorageAccounts,
  "Microsoft.ContainerRegistry/registries": AzureIcons.AzContainerRegistries,
  "Microsoft.Compute/virtualMachineScaleSets": AzureIcons.AzVMScaleSets,
  "Microsoft.Network/loadBalancers": AzureIcons.AzLoadBalancers,
  "Microsoft.Network/publicIPAddresses": AzureIcons.AzPublicIPAddresses,
  "Microsoft.Network/networkWatchers/flowLogs": AzureIcons.AzNetworkWatcher,
  "Microsoft.Network/privateDnsZones/virtualNetworkLinks": AzureIcons.AzPrivateLink,
  "Microsoft.DBforPostgreSQL/flexibleServers": AzureIcons.AzDatabasePostgreSQLServer,
  "Microsoft.Network/applicationGatewayWebApplicationFirewallPolicies": AzureIcons.AzWebApplicationFirewallPolicies,
  "Microsoft.ManagedIdentity/userAssignedIdentities": AzureIcons.AzManagedIdentities,
  "Microsoft.Network/networkInterfaces": AzureIcons.AzNetworkInterfaces,
  "Microsoft.OperationalInsights/workspaces": AzureIcons.AzLogAnalyticsWorkspaces,
  "Microsoft.OperationsManagement/solutions": AzureIcons.AzMonitor,
  "Microsoft.Compute/images": AzureIcons.AzImages,
  "Microsoft.Network/privateEndpoints": AzureIcons.AzPrivateEndpoints,
  "Microsoft.Resources/resourceGroups": AzureIcons.AzResourceGroups,
};

export default ResourceType2IconMap;