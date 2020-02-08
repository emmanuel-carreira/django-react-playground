from django.test import TestCase
from model_mommy import mommy
from leads.models import Lead


class LeadTest(TestCase):
    def setUp(self):
        mommy.make(Lead, _quantity=2)

    def test_save_model(self):

        lead_models_quantity = Lead.objects.count()
        self.assertEquals(
            lead_models_quantity,
            2,
            msg="""There should be 2 objects in the database."""
        )
