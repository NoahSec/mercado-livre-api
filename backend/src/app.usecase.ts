import { provide } from "inversify-binding-decorators";

@provide(AppUseCase)
class AppUseCase {
    execute() {
        let a = process.env.PORT;
        return a;
    }
}

export { AppUseCase };
