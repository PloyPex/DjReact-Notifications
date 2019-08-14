from django.db.models.signals import post_save
from django.dispatch import receiver

from notifications.signals import notify

from .models import Blog


@receiver(post_save, sender=Blog)
def post_save_blog_notify(sender, instance, created, *args, **kwargs):
    if created:
        user = instance.author
        notify.send(user, recipient=user, verb=f"You created blog post - {instance.title}",
            level='success', target=instance)
        # at {instance.timestamp}")
