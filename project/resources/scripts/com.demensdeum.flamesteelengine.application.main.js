if (GLOBAL_CONTEXT === undefined) {
    include("com.demensdeum.flamesteelengine.application.includes.js");
    IncludeDependencies();
    GLOBAL_CONTEXT = new Context();
}
GLOBAL_CONTEXT.step();
