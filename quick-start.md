# Quick Start

Setting up a dockyard server is easy! As DockyardMC is a library and not a standalone program (unlike for example PaperMC), you'll need to integrate it into your Kotlin project.

1. Create a new empty Kotlin project
2. Add following to your `build.gradle.kts`:

    ```kotlin
    repositories {
        maven("https://mvn.devos.one/releases")
    }
    
    dependencies {
        implementation("io.github.dockyardmc:dockyard:0.1.2")
    }
    
    ```
3. Then in your main function, create new instance of Dockyard Server
    ```kotlin
    val server = DockyardServer()
    server.start()
    ```

Now you should have a server running, by default on IP `0.0.0.0` and port `25565`