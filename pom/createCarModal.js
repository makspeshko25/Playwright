import * as Modules from '../index.js';

export default class CreateCarModal extends Modules.BasePage(){
    constructor(page){
        super(page);
        this.selectors={
            //general selectors
            brandDropdown: this.page.locator('#addCarBrand'),
            modelDropdown: this.page.locator('#addCarModel'),
            mileageField: this.page.locator('#addCarMileage'),
            cancelButton: this.page.locator('button.btn.btn-secondary', { hasText: 'Cancel' }),
            addButtonDisabled: this.page.locator('button.btn.btn-primary[disabled]', { hasText: 'Add' }),
            addbuttonActive: this.page.locator('button.btn.btn-primary:not([disabled])', { hasText: 'Add' }),
            //brand selectors
            audiBrandOption: this.page.locator('option[value="0: 1"]', { hasText: 'Audi' }),
            bmwBrandOption: this.page.locator('option[value="1: 2"]', { hasText: 'BMW' }),
            fordBrandOption: this.page.locator('option[value="2: 3"]', { hasText: 'Ford' }),
            porscheBrandOption: this.page.locator('option[value="3: 4"]', { hasText: 'Porsche' }),
            fiatBrandOption: this.page.locator('option[value="4: 5"]', { hasText: 'Fiat' }),
            //audi models
            modelTTOption: this.page.locator('option[value="0: 1"]', { hasText: 'TT' }),
            modelR8Option: this.page.locator('option[value="1: 2"]', { hasText: 'R8' }),
            modelQ7Option: this.page.locator('option[value="2: 3"]', { hasText: 'Q7' }),
            modelA6Option: this.page.locator('option[value="3: 4"]', { hasText: 'A6' }),
            modelA8Option: this.page.locator('option[value="4: 5"]', { hasText: 'A8' }),
            //bmw models
            model3Option: this.page.locator('option[value="0: 1"]', { hasText: '3' }),
            model5Option: this.page.locator('option[value="1: 2"]', { hasText: '5' }),
            modelX5Option: this.page.locator('option[value="2: 3"]', { hasText: 'X5' }),
            modelX6Option: this.page.locator('option[value="3: 4"]', { hasText: 'X6' }),
            modelZ3Option: this.page.locator('option[value="4: 5"]', { hasText: 'Z3' }),
            //ford models
            modelFiestaOption: this.page.locator('option[value="0: 1"]', { hasText: 'Fiesta' }),
            modelFocusOption: this.page.locator('option[value="1: 2"]', { hasText: 'Focus' }),
            modelFusionOption: this.page.locator('option[value="2: 3"]', { hasText: 'Fusion' }),
            modelMondeoOption: this.page.locator('option[value="3: 4"]', { hasText: 'Mondeo' }),
            modelSierraOption: this.page.locator('option[value="4: 5"]', { hasText: 'Sierra' }),
            //porsche models
            model911Option: this.page.locator('option[value="0: 1"]', { hasText: '911' }),
            modelCayenneOption: this.page.locator('option[value="1: 2"]', { hasText: 'Cayenne' }),
            modelPanameraOption: this.page.locator('option[value="2: 3"]', { hasText: 'Panamera' }),
            //fiat models
            modelPalioOption: this.page.locator('option[value="0: 1"]', { hasText: 'Palio' }),
            modelDucatoOption: this.page.locator('option[value="1: 2"]', { hasText: 'Ducato' }),
            modelPandaoption: this.page.locator('option[value="2: 3"]', { hasText: 'Pandao' }),
            modelPuntoOption: this.page.locator('option[value="3: 4"]', { hasText: 'Punto' }),
            modelScudoOption: this.page.locator('option[value="4: 5"]', { hasText: 'Scudo' })
        }
    }
    //Randomized selectors of model///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async selectRandomAudiModel() {
        const audiModels = [
            this.selectors.modelTTOption,
            this.selectors.modelR8Option,
            this.selectors.modelQ7Option,
            this.selectors.modelA6Option,
            this.selectors.modelA8Option
        ];
    
        await this.selectors.brandDropdown.click();
        await this.selectors.audiBrandOption.click();
        await this.page.waitForTimeout(500);
    
        await this.selectors.modelDropdown.click();
        const randomModel = audiModels[Math.floor(Math.random() * audiModels.length)];
        await randomModel.click();
    }
    async selectRandomBmwModel() {
        const bmwModels = [
            this.selectors.model3Option,
            this.selectors.model5Option,
            this.selectors.modelX5Option,
            this.selectors.modelX6Option,
            this.selectors.modelZ3Option
        ];
    
        await this.selectors.brandDropdown.click();
        await this.selectors.bmwBrandOption.click();
        await this.page.waitForTimeout(500);
    
        await this.selectors.modelDropdown.click();
        const randomModel = bmwModels[Math.floor(Math.random() * bmwModels.length)];
        await randomModel.click();
    }
    async selectRandomFordModel() {
        const fordModels = [
            this.selectors.modelFiestaOption,
            this.selectors.modelFocusOption,
            this.selectors.modelFusionOption,
            this.selectors.modelMondeoOption,
            this.selectors.modelSierraOption
        ];
    
        await this.selectors.brandDropdown.click();
        await this.selectors.fordBrandOption.click();
        await this.page.waitForTimeout(500);
    
        await this.selectors.modelDropdown.click();
        const randomModel = fordModels[Math.floor(Math.random() * fordModels.length)];
        await randomModel.click();
    }
    async selectRandomPorscheModel() {
        const porscheModels = [
            this.selectors.model911Option,
            this.selectors.modelCayenneOption,
            this.selectors.modelPanameraOption
        ];
    
        await this.selectors.brandDropdown.click();
        await this.selectors.porscheBrandOption.click();
        await this.page.waitForTimeout(500);
    
        await this.selectors.modelDropdown.click();
        const randomModel = porscheModels[Math.floor(Math.random() * porscheModels.length)];
        await randomModel.click();
    }
    async selectRandomFiatModel() {
        const fiatModels = [
            this.selectors.modelPalioOption,
            this.selectors.modelDucatoOption,
            this.selectors.modelPandaoption,
            this.selectors.modelPuntoOption,
            this.selectors.modelScudoOption
        ];
    
        await this.selectors.brandDropdown.click();
        await this.selectors.fiatBrandOption.click();
        await this.page.waitForTimeout(500);
    
        await this.selectors.modelDropdown.click();
        const randomModel = fiatModels[Math.floor(Math.random() * fiatModels.length)];
        await randomModel.click();
    }
    //Select Brand////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async selectAudi(){
        await brandDropdown.selectOption({ label: 'Audi' });
    }
    async selectBMW(){
        await brandDropdown.selectOption({ label: 'BMW' });
    }
    async selectFord(){
        await brandDropdown.selectOption({ label: 'Ford' });
    }
    async selectPorsche(){
        await brandDropdown.selectOption({ label: 'Porsche' });
    }
    async selectFiat(){
        await brandDropdown.selectOption({ label: 'Fiat' });
    }
    //Check the list of proper model options///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    async brandOptionsVisible(){
        const brandOptions = [
            this.selectors.audiBrandOption,
            this.selectors.bmwBrandOption,
            this.selectors.fordBrandOption,
            this.selectors.porscheBrandOption,
            this.selectors.fiatBrandOption
        ];
    
        for (const option of brandOptions) {
            await expect(option).toBeVisible();
        }
    }
    async audiOptionsVisible(){
        const modelOptions = [
            this.selectors.modelTTOption,
            this.selectors.modelR8Option,
            this.selectors.modelQ7Option,
            this.selectors.modelA6Option,
            this.selectors.modelA8Option
          ];
        
          for (const option of modelOptions) {
            const isVisible = await option.isVisible();
            if (!isVisible) {
              throw new Error(`Model option not visible: ${await option.textContent()}`);
            }
          }
    }
    async bmwOptionsVisible(){
        const expectedOptions = [
            this.selectors.model3Option,
            this.selectors.model5Option,
            this.selectors.modelX5Option,
            this.selectors.modelX6Option,
            this.selectors.modelZ3Option
        ];
    
        for (const option of expectedOptions) {
            await expect(option).toBeVisible();
        }
    }
    async fordOptionsVisible(){
        const expectedOptions = [
            this.selectors.modelFiestaOption,
            this.selectors.modelFocusOption,
            this.selectors.modelFusionOption,
            this.selectors.modelMondeoOption,
            this.selectors.modelSierraOption
        ];
    
        for (const option of expectedOptions) {
            await expect(option).toBeVisible();
        }
    }
    async porscheOptionsVisible(){
        const expectedOptions = [
            this.selectors.model911Option,
            this.selectors.modelCayenneOption,
            this.selectors.modelPanameraOption
        ];
    
        for (const option of expectedOptions) {
            await expect(option).toBeVisible();
        }
    }
    async fiatOptionsVisible(){
        const expectedOptions = [
            this.selectors.modelDucatoOption,
            this.selectors.modelPandaoption,
            this.selectors.modelPuntoOption,
            this.selectors.modelScudoOption,
            this.selectors.modelPalioOption
        ];
    
        for (const option of expectedOptions) {
            await expect(option).toBeVisible();
        }
    }

    async isDisabledAddButtonVisible(){
        return this.isVisible(this.selectors.addButtonDisabled)
    }
    async clickAddButton(){
        return this.click(this.selectors.addbuttonActive)
    }
    async clickCancelButton(){
        return this.click(this.selectors.cancelButton)
    }
    async clickMileageField(){
        return this.click(this.selectors.mileageField)
    }
    async enterMileageValue(){
        return this.type(mileageField,'25000')
    }
}