// SALUX - Tweaks panel
// Three expressive controls that reshape the feel of home-saas.html:
//   palette · form · motion

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "civic",
  "form": "soft",
  "motion": "standard"
}/*EDITMODE-END*/;

// Each palette is a complete recolor: primaries, accents, ink, surfaces.
const PALETTES = {
  civic: {
    label: "Civic",
    swatch: ["#3F9A6C", "#3B72C4", "#0B1829", "#F7F8FA"],
    vars: {
      "--primary": "#7DC8A0", "--primary-600": "#5BB286", "--primary-700": "#3F9A6C", "--primary-50": "#EAF6F0",
      "--accent": "#3B72C4", "--accent-600": "#2A5BA7", "--accent-50": "#ECF2FB",
      "--ink": "#0B1829", "--ink-2": "#1E3A5F", "--muted": "#5A6B82", "--muted-2": "#8A98AE",
      "--bg": "#F7F8FA", "--bg-alt": "#EEF1F5", "--line": "#E1E5EC", "--line-strong": "#C4CBD6"
    }
  },
  editorial: {
    label: "Editorial",
    swatch: ["#111111", "#D97757", "#1A1A1A", "#FAFAF7"],
    vars: {
      "--primary": "#1A1A1A", "--primary-600": "#0F0F0F", "--primary-700": "#000000", "--primary-50": "#EFEFEC",
      "--accent": "#D97757", "--accent-600": "#B85C3F", "--accent-50": "#FBEEE6",
      "--ink": "#0A0A0A", "--ink-2": "#262624", "--muted": "#6B6B66", "--muted-2": "#9E9E98",
      "--bg": "#FAFAF7", "--bg-alt": "#F0EFEA", "--line": "#E5E3DC", "--line-strong": "#C9C6BC"
    }
  },
  coastal: {
    label: "Coastal",
    swatch: ["#0E2F4E", "#C99750", "#0E2F4E", "#F5F0E6"],
    vars: {
      "--primary": "#1F4E7A", "--primary-600": "#163E63", "--primary-700": "#0E2F4E", "--primary-50": "#E6EDF4",
      "--accent": "#C99750", "--accent-600": "#A87B36", "--accent-50": "#FBF3E2",
      "--ink": "#0A1E33", "--ink-2": "#1B3856", "--muted": "#5E6E82", "--muted-2": "#8A97A8",
      "--bg": "#F5F0E6", "--bg-alt": "#EAE2D0", "--line": "#DDD3BD", "--line-strong": "#BFB196"
    }
  },
  field: {
    label: "Field",
    swatch: ["#A24E29", "#386B43", "#231915", "#F6EFE5"],
    vars: {
      "--primary": "#C2613A", "--primary-600": "#A24E29", "--primary-700": "#7E3B1D", "--primary-50": "#F9E9DE",
      "--accent": "#386B43", "--accent-600": "#2A5333", "--accent-50": "#E4F0E6",
      "--ink": "#231915", "--ink-2": "#3D2C24", "--muted": "#6B564B", "--muted-2": "#998676",
      "--bg": "#F6EFE5", "--bg-alt": "#EDE2CE", "--line": "#DCCDB4", "--line-strong": "#BBA68B"
    }
  }
};

const PALETTE_OPTIONS = Object.keys(PALETTES).map(k => PALETTES[k].swatch);
const PALETTE_KEYS = Object.keys(PALETTES);

function applyPalette(key) {
  const p = PALETTES[key] || PALETTES.civic;
  const root = document.documentElement;
  Object.entries(p.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  document.body.setAttribute("data-palette", key);
}

function applyForm(key) {
  document.body.setAttribute("data-form", key);
}

function applyMotion(key) {
  document.body.setAttribute("data-motion", key);
  // Auto-cycle speed by motion mode
  if (window.saluxCycle) {
    if (key === "calm") window.saluxCycle.stop();
    else if (key === "lively") window.saluxCycle.start(1800);
    else window.saluxCycle.start(3200);
  }
}

function paletteFromSwatch(swatch) {
  // TweakColor sends back the swatch array - map it back to key
  for (let i = 0; i < PALETTE_KEYS.length; i++) {
    if (PALETTES[PALETTE_KEYS[i]].swatch === swatch ||
        JSON.stringify(PALETTES[PALETTE_KEYS[i]].swatch) === JSON.stringify(swatch)) {
      return PALETTE_KEYS[i];
    }
  }
  return "civic";
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply on mount and whenever values change
  React.useEffect(() => { applyPalette(t.palette); }, [t.palette]);
  React.useEffect(() => { applyForm(t.form); }, [t.form]);
  React.useEffect(() => { applyMotion(t.motion); }, [t.motion]);

  const currentSwatch = (PALETTES[t.palette] || PALETTES.civic).swatch;

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Paletă" />
      <TweakColor
        label="Mood"
        value={currentSwatch}
        options={PALETTE_OPTIONS}
        onChange={(v) => setTweak("palette", paletteFromSwatch(v))}
      />
      <TweakSection label="Formă" />
      <TweakRadio
        label="Colțuri"
        value={t.form}
        options={["sharp", "soft", "pill"]}
        onChange={(v) => setTweak("form", v)}
      />
      <TweakSection label="Mișcare" />
      <TweakRadio
        label="Ritm"
        value={t.motion}
        options={["calm", "standard", "lively"]}
        onChange={(v) => setTweak("motion", v)}
      />
    </TweaksPanel>
  );
}

// Mount
const __saluxTweaksRoot = document.createElement("div");
document.body.appendChild(__saluxTweaksRoot);
ReactDOM.createRoot(__saluxTweaksRoot).render(<App />);
