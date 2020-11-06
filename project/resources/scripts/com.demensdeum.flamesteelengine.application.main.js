if (GLOBAL_CONTEXT === undefined) {
    include("com.demensdeum.spacejaguaractionrpg.includes.js");
    IncludeDependencies();
    GLOBAL_CONTEXT = new Context();
}
GLOBAL_CONTEXT.step();
