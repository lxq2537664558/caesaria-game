function createDebugMenu()
{
  var topmenu = new ContextMenu("TopMenu");
  topmenu.addItem("","Debug");
  topmenu.addItemWithCallback("Debug/enemies", "add_enemy_archers", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "add_enemy_soldiers", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "add_chastener_soldiers", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "add_wolves", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "send_chastener", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "add_empire_barbarian", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "send_barbarian_to_player", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/enemies", "kill_all_enemies", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/requests", "comply_rome_request", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/requests", "test_request", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/divinity", "send_mars_wrath", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/divinity", "send_mars_spirit", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/divinity", "send_venus_wrath", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/divinity", "send_neptune_wrath", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/divinity", "send_venus_smallcurse", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/money", "add_1000_dn", function() {
      engine.log("Added 1000 dn to city")
      g_session.createIssue("donation",1000)
  } )
  topmenu.addItemWithCallback("Debug/money", "add_player_money", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/goods", "add_wheat_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_fish_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_meat_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_olives_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_fruit_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_grape_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_vegetable_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_clay_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_timber_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_iron_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_marble_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_pottery_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_furniture_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_weapons_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_wine_to_warehouse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_oil_to_warehouse", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/goods", "add_wheat_to_granary", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_fish_to_granary", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_meat_to_granary", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_fruit_to_granary", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/goods", "add_vegetable_to_granary", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/factories", "all_wheatfarms_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_wahrf_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_olivefarms_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_fruitfarms_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_grapefarms_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_vegetablefarms_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_claypit_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_timberyard_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_ironmine_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_marblequarry_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_potteryworkshtp_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_furnitureworksop_fillstock", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_furnitureworksop_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_weaponworkshop_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_wineworkshop_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_oilworkshop_ready", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/factories", "all_creamery_fillstock", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/other", "send_player_army", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/other", "screenshot", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/other", "enable_constructor_mode", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/other", "next_theme", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/buildings", "toggle_shipyard_enable", function() {toggleBuildOptions("shipyard")} )
  topmenu.addItemWithCallback("Debug/buildings", "toggle_reservoir_enable", function() {toggleBuildOptions("reservoir")} )
  topmenu.addItemWithCallback("Debug/buildings", "toggle_wineshop_enable", function() {toggleBuildOptions("wine_workshop")} )
  topmenu.addItemWithCallback("Debug/buildings", "toggle_vinard_enable", function() {toggleBuildOptions("vinard")} )

  topmenu.addItemWithCallback("Debug/disaster", "random_fire", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/disaster", "random_collapse", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/disaster", "random_plague", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/disaster", "earthquake", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/disaster", "fill_random_claypit", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/disaster", "forest_fire", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/level", "win_mission", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/level", "fail_mission", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/level", "change_emperor", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/level", "property_browser", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/level", "show_requests", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/level", "show_attacks", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/empire", "send_merchants", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/empire", "toggle_lock_empiremap", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/empire", "empire_toggle_capua", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/empire", "empire_toggle_londinium", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/in_city", "add_soldiers_in_fort", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "add_city_border", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "crash_favor", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "add_scribe_messages", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "show_fest", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "add_favor", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "remove_favor", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "make_generation", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "decrease_sentiment", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "increase_sentiment", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "forest_grow", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "reset_fire_risk", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/in_city", "reset_collapse_risk", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/house", "increase_max_level", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/house", "decrease_max_level", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/house", "increase_house_level", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/house", "decrease_house_level", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/house", "lock_house_level", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/options", "all_sound_off", function() {
      engine.setVolume(1,0); engine.setOption("ambientVolume",0);
      engine.setVolume(2,0); engine.setOption("musicVolume",0);
      engine.setVolume(3,0); engine.setOption("soundVolume",0);
  } )
  topmenu.addItemWithCallback("Debug/options", "reload_aqueducts", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/options", "toggle_experimental_options", function() {engine.log("test")} )
  topmenu.addItemWithCallback("Debug/options", "reload_buildings_config", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/draw", "toggle_grid_visibility", function() { toggleDrawFlag("drawGrid");} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_overlay_base", function() {toggleDrawFlag("shadowOverlay")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_path", function() {toggleDrawFlag("showPath")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_roads", function() {toggleDrawFlag("showRoads")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_buildings", function() {toggleDrawFlag("showBuildings")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_trees", function() {toggleDrawFlag("showTrees")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_object_area", function() {toggleDrawFlag("showObjectArea")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_walkable_tiles", function() {toggleDrawFlag("showWalkableTiles")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_locked_tiles", function() {toggleDrawFlag("showLockedTiles")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_flat_tiles", function() {toggleDrawFlag("showFlatTiles")} )
  topmenu.addItemWithCallback("Debug/draw", "toggle_show_rocks", function() {toggleDrawFlag("showRocks")} )

  topmenu.addItemWithCallback("Debug/empiremap", "toggle_show_empireMapTiles", function() {engine.log("test")} )

  topmenu.addItemWithCallback("Debug/steam", "reset_steam_prefs", function() {engine.log("test")} )
}

function toggleBuildOptions(name)
{
  var value = g_session.getBuildflag(name);
  g_session.setBuildflag(name,!value);

  engine.log( "Change build flag " + name + " to " + (!value ? "true" : "false"))
}

function toggleDrawflag(name)
{
  var value = engine.getDrawsflag(name);
  engine.setDrawsflag(name,!value);

  engine.log( "Change draw flag " + name + " to " + (!value ? "true" : "false"))
}
