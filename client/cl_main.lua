-- == CHANGELOGS == --

RegisterCommand('changelogs', function()
  SetNuiFocus(true, true)
  SendNUIMessage({
    action = "changelogs",
  })
end)

RegisterNUICallback('Close', function(data, cb)
  SetNuiFocus(false, false)
end)