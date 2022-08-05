import { MockRepository } from "medusa-test-utils"
import { TaxProvider } from "../../models"
import { TaxProviderRepository } from "../tax-provider"

export const TaxProviderRepositoryMock = MockRepository({
  create: jest.fn().mockImplementation((data) => {
    return Object.assign(new TaxProvider(), data)
  })
}) as TaxProviderRepository