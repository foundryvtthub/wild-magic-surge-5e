import { WMSCONST } from "./WMSCONST";
import {
  ChatSettingsPanel,
  IncrementalSettingsPanel,
  SpellLevelSettingsPanel,
  StandardSettingsPanel,
  SpellRegexSettingsPanel,
} from "./panels/index";

class ModuleSettings {
  /**
   * Register all module settings
   * @public
   * @return {void}
   */
  static Register(): void {
    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_WMS_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_wms_feat_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_wms_feat_name_hint"),
        scope: "world",
        config: true,
        default: "Wild Magic Surge",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TOC_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_toc_feat_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_toc_feat_name_hint"),
        scope: "world",
        config: true,
        default: "Tides of Chaos",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_POWM_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_powm_feat_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_powm_feat_name_hint"),
        scope: "world",
        config: true,
        default: "Path of Wild Magic",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_AUTO_D20}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_auto_d20_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_auto_d20_hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_SPELL_REGEX_ENABLED}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_enable_spell_regex_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_enable_spell_regex_hint"),
        scope: "world",
        config: false,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_SPELL_REGEX}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_spell_regex_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_spell_regex_hint"),
        scope: "world",
        config: false,
        default: "\\(S\\)",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_WHISPER_GM}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_whisper_gm_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_whisper_gm_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_SURGE_TYPE}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_surge_type_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_surge_type_hint"),
        scope: "world",
        config: true,
        choices: WMSCONST.SURGE_TYPE,
        default: "Default",
        type: String,
      }
    );

    game.settings.registerMenu(
      `${WMSCONST.MODULE_ID}`,
      `SpellRegexSettingsPanel`,
      {
        name: "Spell Regex for Multiclass",
        label: "Configure",
        icon: "fas fa-cog",
        scope: "world",
        type: SpellRegexSettingsPanel,
        restricted: true,
      }
    );

    game.settings.registerMenu(
      `${WMSCONST.MODULE_ID}`,
      `StandardSettingsPanel`,
      {
        name: "Standard PHB Variant",
        label: "Configure",
        icon: "fas fa-cog",
        scope: "world",
        type: StandardSettingsPanel,
        restricted: true,
      }
    );

    game.settings.registerMenu(
      `${WMSCONST.MODULE_ID}`,
      `SpellLevelSettingsPanel`,
      {
        name: "Spell Level Dependent Rolls Variant",
        label: "Configure",
        icon: "fas fa-cog",
        scope: "world",
        type: SpellLevelSettingsPanel,
        restricted: true,
      }
    );

    game.settings.registerMenu(
      `${WMSCONST.MODULE_ID}`,
      `IncrementalSettingsPanel`,
      {
        name: "Incremental Check Variant",
        label: "Configure",
        icon: "fas fa-cog",
        scope: "world",
        type: IncrementalSettingsPanel,
        restricted: true,
      }
    );

    game.settings.registerMenu(`${WMSCONST.MODULE_ID}`, `ChatSettingsPanel`, {
      name: "Chat Message Options",
      label: "Configure",
      icon: "fas fa-cog",
      scope: "world",
      type: ChatSettingsPanel,
      restricted: true,
    });

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_INCREMENTAL_CHECK_TO_CHAT}`,
      {
        name: game.i18n.format(
          "WildMagicSurge5E.opt_incremental_check_to_chat_name"
        ),
        hint: game.i18n.format(
          "WildMagicSurge5E.opt_incremental_check_to_chat_hint"
        ),
        scope: "world",
        config: false,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_CHAT_MSG}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_chat_msg_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_chat_msg_hint"),
        scope: "world",
        config: false,
        default: "Wild Magic Check - Roll a D20",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_AUTO_D20_MSG}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_auto_d20_msg_hint"),
        scope: "world",
        config: false,
        default: "Wild Magic Surge! Roll a D100!",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_AUTO_D20_MSG_NO_SURGE}`,
      {
        name: game.i18n.format(
          "WildMagicSurge5E.opt_auto_d20_msg_no_surge_name"
        ),
        hint: game.i18n.format(
          "WildMagicSurge5E.opt_auto_d20_msg_no_surge_hint"
        ),
        scope: "world",
        config: false,
        default: "No wild magic surge",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_ENABLE_TOC}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_enable_toc_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_enable_toc_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_ROLLTABLE_ENABLE}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_rolltable_enabled_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_enabled_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_ROLLTABLE_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_hint"),
        scope: "world",
        config: true,
        default: "Wild Magic Surge 5e (PHB)",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_ROLLTABLE_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_name_hint"),
        scope: "world",
        config: true,
        default: "Wild Magic Surge 5e (PHB)",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_POWM_ROLLTABLE_NAME}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_rolltable_powm_name_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_rolltable_powm_name_hint"),
        scope: "world",
        config: true,
        default: "Path of Wild Magic Table",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_CUSTOM_ROLL_DICE_FORMULA}`,
      {
        name: game.i18n.format(
          "WildMagicSurge5E.opt_custom_roll_dice_formula_name"
        ),
        hint: game.i18n.format(
          "WildMagicSurge5E.opt_custom_roll_dice_formula_hint"
        ),
        scope: "world",
        config: false,
        default: WMSCONST.DIE_VALUE.D20,
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_CUSTOM_ROLL_RESULT_CHECK}`,
      {
        name: game.i18n.format(
          "WildMagicSurge5E.opt_custom_roll_result_check_name"
        ),
        hint: game.i18n.format(
          "WildMagicSurge5E.opt_custom_roll_result_check_hint"
        ),
        scope: "world",
        config: false,
        choices: WMSCONST.ROLL_COMPARISON,
        default: WMSCONST.COMPARISON.EQ,
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_CUSTOM_ROLL_RESULT}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_custom_roll_result_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_custom_roll_result_hint"),
        scope: "world",
        config: false,
        default: "1",
        type: String,
      }
    );

    game.settings.register(`${WMSCONST.MODULE_ID}`, `${WMSCONST.OPT_TSL_DIE}`, {
      name: game.i18n.format("WildMagicSurge5E.opt_tsl_die_name"),
      hint: game.i18n.format("WildMagicSurge5E.opt_tsl_die_hint"),
      scope: "world",
      config: false,
      default: WMSCONST.DIE_VALUE.D20,
      type: String,
    });

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL1}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl1_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl1_hint"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL2}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl2_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL3}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl3_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL4}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl4_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL5}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl5_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL6}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl6_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL7}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl7_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL8}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl8_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL9}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl9_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_TSL_LVL10}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_tsl_lvl10_name"),
        scope: "world",
        config: false,
        default: "= 1",
        type: String,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_ENABLE_NPCS}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_enable_npcs_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_enable_npcs_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_SURGE_TOC_ENABLED}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_enable_surge_toc_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_enable_surge_toc_hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_EFFECTS_ENABLED}`,
      {
        name: game.i18n.format("WildMagicSurge5E.opt_enable_effects_name"),
        hint: game.i18n.format("WildMagicSurge5E.opt_enable_effects_hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
      }
    );

    game.settings.register(
      `${WMSCONST.MODULE_ID}`,
      `${WMSCONST.OPT_CANTRIP_SURGE_ENABLED}`,
      {
        name: game.i18n.format(
          "WildMagicSurge5E.opt_cantrip_surge_enabled_name"
        ),
        hint: game.i18n.format(
          "WildMagicSurge5E.opt_cantrip_surge_enabled_hint"
        ),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
      }
    );
  }
}

export default ModuleSettings;
